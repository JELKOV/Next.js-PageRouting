import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from '../icons/arrow-right-icon';

function EventItem(props) {
  const { id, title, location, date, image } = props;

  // 날짜 변환: 읽기 편한 형식으로 변환
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // 주소 변환: 쉼표를 줄바꿈으로 변경
  const formattedAddress = location.replace(", ", "\n");

  // 이벤트 상세 페이지 링크 설정
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img className={classes.image} src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
