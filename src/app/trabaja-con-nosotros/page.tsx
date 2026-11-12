import type { Metadata } from 'next';
import TrabajaConNosotrosClient from '@/components/trabaja-con-nosotros/TrabajaConNosotrosClient';

export const metadata: Metadata = {
  title: 'Trabaja con Nosotros | Colombo Farmacéutica SAS',
  description:
    'Únete a nuestro equipo en Colombo Farmacéutica SAS. Registra tu hoja de vida y forma parte de nuestra comunidad comprometida con la salud, la calidad y el bienestar.',
};

export default function TrabajaConNosotrosPage() {
  return <TrabajaConNosotrosClient />;
}

