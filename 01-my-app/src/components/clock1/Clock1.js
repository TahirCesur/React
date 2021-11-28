import "./clock1.css";
import moment from "moment"; // moment kütüphanesini import ettik

const Clock1 = () => {
  // import edilen moment kütüphanesini burada tanımlamış olduk...
  const dateTime = moment(); /* O an ki saat ve tarihi vermeye yarar... */
  const timeStr = dateTime.format("HH:mm"); /* saat ve dakika */
  const dateStr = dateTime.format("LL"); // November 28, 2021 bu şekli verir...
  const dayStr = dateTime.format("dddd"); // Sunday --> gibi gün verir
  const hour = dateTime.format("HH"); // Saati alarak Evening Afternon Morning vermesini sağlayacağız...

  // 9. satırı şartla buraya sağlamış oluyoruz.
  let message = ""; // let ile tanımlama sebebimiz let değişkendir const ise sabittir.
  if (hour >= 6 && hour < 11) message = "Morning";
  else if (hour >= 11 && hour < 17) message = "Afternoon";
  else if (hour >= 17 && hour < 21) message = "Evening";
  else message = "Night";

  return (
    <div className="clock-container">
      <div className="clock">{timeStr}</div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {message}
        </div>
      </div>
    </div>
  );
};

export default Clock1;

/*  */
