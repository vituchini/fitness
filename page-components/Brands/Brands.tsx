import Image from 'next/image'
import { Button, Tabs, Title } from '../../components'
import styles from './Brands.module.scss'
import { brands } from './images'

export const Brands = () => {
  const categories = [
    'Беговые дорожки',
    'Эллиптические тренажеры',
    'Велотренажеры',
    'Силовые тренажеры',
    'Батуты',
    'Игровые столы',
  ]

  return (
    <div className={styles.brands}>
      <div className={styles.wrapper}>
        <Title className={styles.title}>Популярные бренды</Title>
        <div className={styles.categories}>
          {categories.map((categorie) => (
            <span className={styles.categorie} key={categorie}>
              {categorie}
            </span>
          ))}
        </div>
        <div className={styles.companies}>
          {brands.map((brand, index) => (
            <div className={styles.companie} key={index}>
              <Image src={brand} alt="" />
            </div>
          ))}
        </div>
        <Button variant="outlined">Все бренды</Button>
      </div>
    </div>
  )
}
