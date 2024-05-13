import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site }) => {
  const title = site?.name || '404 - Page Not Found'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>404 - Page Not Found</h1>

          <a href='https://github.com/SAWARATSUKI/KawaiiLogos'>
            <img
              src='https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/main/ResponseCode/404%20NotFound.png'
              alt='404 Not Found'
              className={styles.errorImage}
            />
          </a>
        </main>

        <footer className={styles.footer}>
          <a href='https://x.com/sawaratsuki1004' className={styles.copyright}>
            Glyph by Sawaratsuki
          </a>
        </footer>
      </div>
    </>
  )
}
