export const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Назва вашого додатку',
      text: 'Текст, який ви хочете поділитися',
      url: window.location.href
    }).then(() => {
      console.log('Поділитися успішно');
    }).catch((error) => {
      console.error('Помилка під час поділу:', error);
    });
  } else {
    console.log('Браузер не підтримує функцію поділу');
  }
};