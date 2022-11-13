import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

const features = [
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Peda 360 bulut mimarisinin gücünü size sonuan dek hissettirir. Nerede olursanız olun verileriniz sizinle.">
        Kullanımı Kolay
      </Translate>
    ),
    imageUrl: 'img/undraw_just_browsing.svg',
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        Peda 360 bulut mimarisinin gücünü size sonuan dek hissettirir. Nerede olursanız olun verileriniz sizinle.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.modern-ui.title"
        description="Title of feature of Modern UI on the home page">
        Modern Arayüz
      </Translate>
    ),
    imageUrl: 'img/undraw_responsive.svg',
    description: (
      <Translate
        values={{ angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>) }}
        id="homepage.features.modern-ui"
        description="Modern UI">
        {`Peda360 yenilikçi Tuvalframework ile tasarlanmıştır. Tüm uygulamalarda eşşsiz kullanıcı deneyimi yaşarsınız.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.connect-information.title"
        description="Title of feature of Connect your information on the home page">
       Esnek Authentication Desteği
      </Translate>
    ),
    imageUrl: 'img/undraw_online_connection.svg',
    description: (
      <Translate
        id="homepage.features.connect-information"
        description="Feature Connect your information">
        Peda 360’a Google hesabınızla da giriş sağlayabilirsiniz
      </Translate>
    ),
  }
];


function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields = {}, tagline } = {} } = context;
  return (
    <Layout title={tagline} description={customFields.description}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Awe logo"
              className={styles.heroLogo}
              src={useBaseUrl('img/main-business.png')}
            />
            <span className={styles.heroTitleTextHtml}>
              <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  business: (<b><Translate>İşletmeler</Translate></b>),
                  appstore: (<b><Translate>appstore</Translate></b>),
                  apps: (<b><Translate>apps</Translate></b>),
                  bussiness: (<b><Translate>bussiness</Translate></b>),
                  smart: (<b><Translate>Akıllı</Translate></b>)
                }}>
                {`Akıllı {business}`}
              </Translate>
              <br />
              <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  superapp: (<b><Translate>superapp</Translate></b>),
                  appstore: (<b><Translate>Çözümler</Translate></b>),
                  apps: (<b><Translate>apps</Translate></b>),
                  bussiness: (<b><Translate>bussiness</Translate></b>)
                }}>
                {`Entegre {appstore}`}
              </Translate>
              <br />
              {/* <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  superapp: (<b><Translate>superapp</Translate></b>),
                  appstore: (<b><Translate>appstore</Translate></b>),
                  apps: (<b><Translate>apps</Translate></b>),
                  bussiness: (<b><Translate>bussiness</Translate></b>)
                }}>
                {`Deploy {apps}`}
              </Translate> */}

            </span>
          </h1>

          <div style={{ color: 'rgba(255,255,255,0.1)' }} className={styles.indexCtas}>
            <div className={styles.indexCtasView}>
              Pedasoft olarak kurumsal süreç yönetimi ve iş uygulamaları alanındaki deneyimlerimizi katma değere dönüştürmek adına Peda 360 Platformu’nu sizlere sunuyoruz.
              <br />
              Peda 360’da her sektörde ve büyüklükte firmanın kendi süreçlerine kolaylıkla entegre edebileceği; bulut mimarisinin gücünü yansıtan; sizlere çeviklik ve esneklik sağlayacak iş uygulamalarına erişebileceksiniz.
            </div>
          </div>
        </div>
      </div>
      {/*   <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          <Translate
            values={{
              migrationGuideLink: (
                <Link to="/docs/guides/v4-migration">
                  <Translate>v3 to v4 migration guide</Translate>
                </Link>
              ),
            }}>
            {`Coming from v3? Check out our {migrationGuideLink}`}
          </Translate>
          .
        </div>
      </div> */}
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
