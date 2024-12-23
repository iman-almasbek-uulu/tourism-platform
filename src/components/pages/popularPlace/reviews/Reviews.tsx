import React from 'react';
import UseTranslate from '@/ui/Translate';

const Reviews: React.FC = () => {
  const { t } = UseTranslate();

  return (
    <div>
      <h2>{t('reviewsTitle')}</h2>
      {/* Добавьте содержимое для отображения */}
      <p>{t('reviewsDescription')}</p>
    </div>
  );
};

export default Reviews;

