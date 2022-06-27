import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import axios from 'axios';
import { NextPage } from 'next';

interface PageProps {
  title: string;
};

const Home: NextPage<PageProps> = props => (
  <div>
    <Header />
    <div>{props.title}</div>
  </div>
);

export default Home;