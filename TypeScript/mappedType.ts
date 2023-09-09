interface types {
  name: string;
  age: number;
  city: string;
}

type Categoryy<T> = {
  [key in keyof T]: T[key];
};
type obj = Categoryy<types>;
