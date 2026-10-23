import { render, screen } from '@testing-library/react';
import withTimestamp from './withTimestamp';

function DemoCard({ title, timestamp }) {
  return (
    <div>
      <h2>{title}</h2>
      <span>Reçu: {timestamp}</span>
    </div>
  );
}

const DemoCardWithTimestamp = withTimestamp(DemoCard);

test('affiche le composant enveloppé et le timestamp au rendu', () => {
  render(<DemoCardWithTimestamp title="Message Important" timestamp="14:30:00" />);

  expect(screen.getByText('Message Important')).toBeInTheDocument();
  expect(screen.getByText('Reçu: 14:30:00')).toBeInTheDocument();
  expect(screen.getByText(/Rendu à : 14:30:00/)).toBeInTheDocument();
});
