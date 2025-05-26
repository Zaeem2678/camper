import React from 'react';
import { useTranslation } from 'react-i18next';

const members = [
  { name: 'sudolathirseed', avatar: '', active: true },
  { name: 'gadgettrendz22', avatar: '', active: true },
  { name: 'sajidtech21', avatar: '', active: true },
  { name: 'camperdooly-boracacim', avatar: '', active: true },
  { name: 'Mastercamper', avatar: '', active: true },
];

const MembersList = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: '#fff', borderRadius: 8,  marginBottom: 24, padding: 18,width: '100%' ,border: '1px solid #e0e0e0'}}>
      <div style={{ fontWeight: 500, fontSize: 20, marginBottom: 22 }}>{t('newsFeed.membersList.title')}</div>
      <div style={{ display: 'flex', gap: 12, marginBottom: 22 }}>
        <span style={{ fontWeight: 600, color: '#007bff', cursor: 'pointer',fontSize: 11 }}>{t('newsFeed.membersList.filters.newest')}</span>
        <span style={{ color: '#888', cursor: 'pointer',fontSize: 11}}>{t('newsFeed.membersList.filters.active')}</span>
        <span style={{ color: '#888', cursor: 'pointer',fontSize: 11 }}>{t('newsFeed.membersList.filters.popular')}</span>
      </div>
      <div style={{ maxHeight: 400, overflowY: 'auto',display: 'flex',flexDirection: 'column',gap: 10}}>
        {members.map((m, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 ,}}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#eee', marginRight: 10 }} />
            <span style={{ fontSize: 14, fontWeight: 500 }}>{m.name}</span>
          </div>
        ))}
      </div>
      <button style={{ marginTop: 8, width: '35%', background: '#f5f5f5', border: 'none', borderRadius: 4, padding: 10, cursor: 'pointer', color: '#000', fontWeight: 600 ,fontSize: 12}}>{t('newsFeed.membersList.seeAll')}</button>
    </div>
  );
};

export default MembersList; 