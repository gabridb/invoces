import Container from 'react-bootstrap/Container';
import FormModule from '../modules/FormModule'

export default function Home() {
  return (
    <Container className="mt-5">
      <h1 class="display-4">
        Invoice details
      </h1>
      <FormModule />
    </Container>
  )
}
