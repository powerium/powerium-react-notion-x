import * as React from 'react'

import * as config from '@/lib/config'

import styles from './styles.module.css'

export const FooterImpl: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>
          Copyright &copy; {currentYear} {config.author}
        </p>
        <p>
          All contents are licensed under CC BY-SA 4.0 unless otherwise
          specified.
        </p>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
