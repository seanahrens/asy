import {
  Bars3Icon,
  BeakerIcon,
  BookmarkSquareIcon,
  CakeIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  FilmIcon,
  LockClosedIcon,
  MapPinIcon,
  PencilIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import Button from 'components/atoms/button'
import Logos from 'components/atoms/logos'
import CopyButton from 'components/molecules/copy-button'
import Card from 'components/organisms/card'
import styles from './app.module.css'

const CONSTANTS = {
  name: 'Kazim Kayhan',
  githubProfileLink: 'https://github.com/kazim-kayhan',
  githubRepoLink: 'https://github.com/kazim-kayhan/react-ts-tailwind',
  copyButtonText: 'npx degit kazim-kayhan/react-ts-tailwind your-project-name',
}

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
      <h1 className={`text-center ${styles.headerTitle}`} style={{color: 'linear-gradient(0deg, #fff8da, #9cb1bb)'}}>AirshipYard</h1>
        <img src="/airshipyard.webp" alt="airshipyard in image form"/>
        <p className={styles.headerDescription}>
        </p>
      </header>

      <section className={styles.features}>

      </section>

      <footer className={styles.footer}>
        <a href={CONSTANTS.githubProfileLink} target="_blank" rel="noreferrer">
        </a>
      </footer>
    </main>
  )
}

export default App
