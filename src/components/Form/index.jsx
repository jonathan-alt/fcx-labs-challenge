/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
import { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

const toggleButtonsOptions = ['CURTI', 'NÃO CURTI'];

function index() {
  const [formBody, setFormBody] = useState({
    name: '',
    score: '',
    shippingRate: '',
    pricingRate: '',
    siteNavigationRate: '',
    paymentRate: '',
    deliveryRate: '',
  });

  const handleChange = (e) => {
    setFormBody({ ...formBody, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const results in formBody) {
      if (!formBody[results]) {
        toast.error('Necessário preencher todos os campos!');
        return;
      }
    }

    api
      .post('/nps', formBody)
      .then(() => toast.success('Avaliação feita com sucesso!'));
  };

  return (
    <Container className='mt-4'>
      <Card>
        <Card.Header>
          <Card.Title>NPS</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='npsName'>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                name='name'
                value={formBody.name}
                onChange={handleChange}
                type='text'
                placeholder='Nome'
              />
            </Form.Group>
            <br />
            <Form.Group controlId='npsScore'>
              <Form.Label>
                Qual é a probabilidade de recomendar esta empresa a um amigo ou
                colega?
              </Form.Label>
              <br />
              {Array.from(Array(10).keys()).map((score) => (
                <Form.Check
                  inline
                  type='radio'
                  key={`scoreBtn${score + 1}`}
                  label={score + 1}
                  name='score'
                  value={score + 1}
                  onChange={handleChange}
                  checked={score + 1 == formBody.score}
                />
              ))}
            </Form.Group>
            <br />
            <Form.Group controlId='npsShippingRate'>
              <Form.Label>Valor do frete</Form.Label>
              <br />
              {toggleButtonsOptions.map((option) => (
                <Form.Check
                  inline
                  type='radio'
                  key={`shippingBtn${option}`}
                  label={option}
                  name='shippingRate'
                  value={option}
                  onChange={handleChange}
                  checked={option == formBody.shippingRate}
                />
              ))}
            </Form.Group>
            <br />
            <Form.Group controlId='npsPricingRate'>
              <Form.Label>Preço do Produto</Form.Label>
              <br />
              {toggleButtonsOptions.map((option) => (
                <Form.Check
                  inline
                  type='radio'
                  key={`priceBtn${option}`}
                  label={option}
                  name='pricingRate'
                  value={option}
                  onChange={handleChange}
                  checked={option == formBody.pricingRate}
                />
              ))}
            </Form.Group>
            <br />
            <Form.Group controlId='npsSiteNavigationRate'>
              <Form.Label>Navegação do site</Form.Label>
              <br />
              {toggleButtonsOptions.map((option) => (
                <Form.Check
                  inline
                  type='radio'
                  key={`siteNavigationBtn${option}`}
                  label={option}
                  name='siteNavigationRate'
                  value={option}
                  onChange={handleChange}
                  checked={option == formBody.siteNavigationRate}
                />
              ))}
            </Form.Group>
            <br />
            <Form.Group controlId='npsPaymentRate'>
              <Form.Label>Pagamento</Form.Label>
              <br />
              {toggleButtonsOptions.map((option) => (
                <Form.Check
                  inline
                  type='radio'
                  key={`paymentBtn${option}`}
                  label={option}
                  name='paymentRate'
                  value={option}
                  onChange={handleChange}
                  checked={option == formBody.paymentRate}
                />
              ))}
            </Form.Group>
            <br />
            <Form.Group controlId='npsDeliveryRate'>
              <Form.Label>Entrega</Form.Label>
              <br />
              {toggleButtonsOptions.map((option) => (
                <Form.Check
                  inline
                  type='radio'
                  key={`deliveryBtn${option}`}
                  label={option}
                  name='deliveryRate'
                  value={option}
                  onChange={handleChange}
                  checked={option == formBody.deliveryRate}
                />
              ))}
            </Form.Group>

            <div className='d-flex justify-content-end'>
              <Button className='mt-4' variant='primary' type='submit'>
                Enviar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default index;
