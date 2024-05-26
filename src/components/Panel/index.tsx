import { Container } from "./styles";

export default function Panel(props: any) {
  return (
    <>
      <Container>
        <img src={props.img} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </Container>
    </>
  );
}
