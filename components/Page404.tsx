import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || 'Notion Page Not Found'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Notion Page Not Found</h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Make sure that Notion page &quot;{pageId}&quot; is publicly
                accessible.
              </p>
            )
          )}

          <a href='https://github.com/SAWARATSUKI/ServiceLogos'>
            <img
              src='https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/404Notfound/NotFound.png'
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
