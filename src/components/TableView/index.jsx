import { useEffect, useState } from 'react';
import { Col, Container, Table } from 'react-bootstrap';
import { api } from '../../services/api';

function TableView() {
  const [npsAverage, setNpsAverage] = useState(10);
  const [npsResults, setNpsResults] = useState([]);

  useEffect(() => {
    api.get('/nps').then((res) => {
      let npsTotal = 0;
      res.data.forEach((nps) => {
        npsTotal += parseInt(nps.score, 10);
      });
      setNpsResults(res.data);
      setNpsAverage(npsTotal / res.data.length);
    });
  }, []);

  return (
    <Container className='mt-4' fluid='lg'>
      <Col>
        <h3>Média: {npsResults.length > 0 ? npsAverage : 'Carregando...'}</h3>
      </Col>
      <br />
      <Table
        striped
        bordered
        hover
        responsive='sm'
        size='sm'
        width='100%'
        variant='success'
      >
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Nota do NPS</th>
            <th>Classificação</th>
            <th>Valor do Frete</th>
            <th>Preço do Produto</th>
            <th>Navegação no Site</th>
            <th>Entrega</th>
          </tr>
        </thead>
        <tbody>
          {npsResults.length > 0 ? (
            npsResults.map((nps) => (
              <tr key={nps.id}>
                <td>{nps.name}</td>
                <td>{nps.score}</td>
                <td>{nps.shippingRate}</td>
                <td>{nps.pricingRate}</td>
                <td>{nps.siteNavigationRate}</td>
                <td>{nps.paymentRate}</td>
                <td>{nps.deliveryRate}</td>
              </tr>
            ))
          ) : (
            <p>carregando...</p>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableView;
