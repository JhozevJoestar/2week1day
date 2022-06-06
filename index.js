
// принимаем ли мы платежи
const canPayment = true;

// имя студента
const studentName = 'your name';

// стоимость обучения
const price = 120000;

// первый из двух платежей
const firstPayment = 50000;

// скидка
const discount = 22;

// формула расчета остатка платежа
const totalPrice = price - (price / 100) * discount;

// сумма 2 платежа
const remainingPayment = totalPrice - firstPayment;

if(canPayment) {
  // подтверждение полной оплаты
  if (remainingPayment === 0) {
    console.log(`Ты оплатил учебу полностью.`);

    // подтверждение не полной оплаты
  } else {
    const message = `
  ${studentName}, ты оплатил ${firstPayment} руб. 
  К оплате осталось еще ${remainingPayment} руб.
  Твоя скидка: ${discount}%
  `;

    // результат оплаты
    console.log(message);
  }
} else {
  console.log(`Мы сейчас не можем принять платеж`);
}