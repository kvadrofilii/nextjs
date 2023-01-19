import { Inter } from '@next/font/google';
import { Button, Htag, P, Tag } from '../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" className="test">
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <P size="s">Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
      <P size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
      <Tag>Ghost</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="green" size="m">
        Green
      </Tag>
    </>
  );
}
