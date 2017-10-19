import React from 'react'
import t from 'lib/web/LocaleStrings'
import styles from './LoginEdge.webStyle.scss'
import QRCode from './QRCode.js'

export default ({
  view,
  dispatch,
  edgeId,
  edgeUsername,
  edgeAccount,
  edgeObject,
  toggleQRCode,
  goToSignupPage
}) => (
  <div className={styles.container}>
    <p className={styles.header}>{t('string_scan_barcode_to_signin')}</p>
    <QRCode
      dispatch={dispatch}
      edgeId={edgeId}
      edgeUsername={edgeUsername}
      edgeAccount={edgeAccount}
      edgeObject={edgeObject}
    />
  </div>
)