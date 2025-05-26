import React from 'react';
import { useTranslation } from 'react-i18next';

const OnlineUsers = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: '#fff', borderRadius: 8,  marginBottom: 24, padding: 18,width: '100%' ,border: '1px solid #e0e0e0'}}>
      <div style={{ display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: 17 }}>
        {t('newsFeed.onlineUsers.title')}
      </div>
      <div style={{ color: '#888', fontWeight: 500, fontSize: 12, borderRadius: 1, py: 0.2 }}>
        {t('newsFeed.onlineUsers.onlineCount', { count: 0 })}
      </div>
      <div style={{ color: '#888', fontSize: 13, background: '#f5f5f5', borderRadius: 1.5, p: 1.5, textAlign: 'start' }}>
        {t('newsFeed.onlineUsers.noUsers')}
      </div>
    </div>
  );
};

export default OnlineUsers; 