import Container from 'react-bootstrap/Container';
import FormModule from '../modules/FormModule'

export default function Home() {
  return (
    <Container className="mt-5">
      <h1 className="display-4">
        Invoice details
      </h1>
      <h2 className="display-6">Sender details</h2>
      <FormModule />
    </Container>
  )
}
