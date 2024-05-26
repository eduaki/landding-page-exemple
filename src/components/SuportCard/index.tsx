import { Container } from "./styles";

export default function SuportCard(props: any) {
  return (
    <>
      <Container>
        <img src={props.img} />
        <div>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
      </Container>
    </>
  );
}
