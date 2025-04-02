//Next-Auth import
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

//export Next-Auth
export default NextAuth({
  // 세션 전략을 JWT로 설정 (서버에 세션 저장 X, 토큰 기반 인증)
  session: {
    strategy: "jwt",
  },
  // 인증 방식 설정 (우리는 이메일+비밀번호를 직접 입력받는 방식)
  providers: [
    CredentialsProvider({
      // 로그인 화면에서 표시될 이름
      name: "Credentials",
      // 로그인 폼에서 입력받을 필드 정의
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // 실제 로그인 로직 정의 (사용자 인증)
      async authorize(credentials) {
        // 1. MongoDB 연결
        const client = await connectToDatabase();
        const usersCollection = client.db().collection("users");

        // 2. 이메일로 사용자 찾기
        const user = await usersCollection.findOne({
          email: credentials.email,
        });
        // 3. 사용자 없으면 에러
        if (!user) {
          client.close();
          throw new Error("No User Found!");
        }
        // 4. 비밀번호 검증 (암호화된 비밀번호와 입력값 비교)
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        // 5. 비밀번호 일치하지 않으면 에러
        if (!isValid) {
          client.close();
          throw new Error(" Could not log you in");
        }
        // 6. 모든 인증 통과 → 로그인 성공
        client.close();
        // 7. JWT 토큰에 포함할 사용자 정보 반환
        return {
          email: user.email,
          name: user.name || null,
          id: user._id.toString(),
        };
      },
    }),
  ],
});
