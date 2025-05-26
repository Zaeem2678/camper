import React from 'react';
import { useTranslation } from 'react-i18next';

const ForumsList = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: '#fff', borderRadius: 8,  marginBottom: 24, padding: 18,border: '1px solid #e0e0e0' }}>
      <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>{t('newsFeed.forumsList.title')}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#333', fontSize: 13 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#e74c3c', display: 'inline-block' }}></span>
        {t('newsFeed.forumsList.forumName')}
      </div>
    </div>
  );
};

export default ForumsList; 