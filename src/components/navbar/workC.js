import { Carousel } from "react-bootstrap";

function WorkCarousel(props) {
  return (
    <div>
      <Carousel slide={false} interval={null}>
        <Carousel.Item>
          <h2>{props.company}</h2>
          <h5>{props.title}</h5>{" "}
          <p>
            {props.start} - {props.end}
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <h4>Responsibilities</h4>
          <ul>
            {props.resp.map(function (det, i) {
              return <li key={i}>{det}</li>;
            })}
          </ul>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default WorkCarousel;
