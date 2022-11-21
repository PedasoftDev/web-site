import Layout from '@theme/Layout';
import React from 'react';
import AppStoreCard from './appstorecard';
import styles from './styles.module.css';

export default function AppStore() {
  return (
    <Layout title="Çözümlerimiz" description="Hello React Page">
      <div className={styles.appStoreLayout}>
        <AppStoreCard
          title={"Pedavalans"}
          image={"https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png"}
          paragraph={"Mavi - Beyaz Yakalı çalışanlarınızın polivalans tablolarını tek tıkla oluşturun ve yönetin!"}
          link={"docs/pedavalans/"}
        />
        <AppStoreCard
          title={"Procetra"}
          image={"https://pedabilisim.com/wp-content/uploads/2021/07/1-j3dTgXjyaYPo9XkM6UMZ3g-600x366.png"}
          paragraph={"İş süreçlerinde yer alan olay kayıtlarını analiz ederek süreçlerinizi inceleyin"}
          link={"docs/procetra/"}
        />
        <AppStoreCard
          title={"KPI Library"}
          image={"https://cdn.simplekpi.com/images/Resources/what-is-a-kpi.webp"}
          paragraph={"Sektör ve Süreç bazlı performans göstergesi kütüphanesi KPI Library ile ortak kurumsal hafızadan faydalanın."}
          link={"docs/kpilibrary/"}
        />
      </div>

    </Layout>

  );
}
