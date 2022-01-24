import { Observable, Subscriber } from 'rxjs';

const observable$ = new Observable<number>((subscriber) => {
  let counter = 1;

  const intervalId = setInterval(() => {
    console.log('Emitted', counter);
    subscriber.next(counter++);
  }, 2000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = observable$.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('Completed'),
});

setTimeout(() => {
  console.log('unsubscribe');
  subscription.unsubscribe();
}, 7000);
