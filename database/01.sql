CREATE TABLE "user"(
  user_id varchar PRIMARY KEY,
  email varchar,
  username varchar,
  name varchar,
  surname varchar,
  address varchar,
  creation_date timestamp with time zone,
  registration_ip varchar,
  active bool,
  state varchar
);

CREATE TABLE model(
    model_id varchar PRIMARY KEY ,
    api_id varchar,
    sku varchar,
    brand varchar,
    name varchar,
    colorway varchar,
    gender varchar,
    release_year smallint,
    retail_date date,
    retail_price integer,
    estimated_market_value integer,
    image_url varchar,
    deleted bool
);

CREATE TABLE product(
  product_id varchar PRIMARY KEY,
  model_id varchar,
  user_id varchar,
  price smallint, /*Values checked at the front end*/
  size smallint,
  description varchar,
  condition varchar, /*Values checked at the front end*/
  are_sent bool,
  time timestamp,
  booked_user_id varchar,
  sold bool,
  deleted bool,
  CONSTRAINT fk_product_user_id__user_user_id FOREIGN KEY (user_id) REFERENCES "user"(user_id),
  CONSTRAINT fk_product_booked_user_id__user_user_id FOREIGN KEY (booked_user_id) REFERENCES "user"(user_id),
  CONSTRAINT fk_product_model_id__user_model_id FOREIGN KEY (model_id) REFERENCES model(model_id)
);


INSERT INTO public.model (model_id, api_id, sku, brand, name, colorway, gender, release_year, retail_date, retail_price, estimated_market_value, image_url, deleted) VALUES ('440e2d6b-8876-402b-96aa-32a921e626af', null, '1222', 'Nike', 'Smart Balance', 'Black', 'Men', 2021, '2023-05-03', 199, 300, 'https://f004.backblazeb2.com/file/flexeo/models/440e2d6b-8876-402b-96aa-32a921e626af', false);
INSERT INTO public.model (model_id, api_id, sku, brand, name, colorway, gender, release_year, retail_date, retail_price, estimated_market_value, image_url, deleted) VALUES ('a3223f2d-362c-43e9-a581-d725ee39e632', null, '2474', 'Nike', 'Limitless Now', 'White', 'Men', 2022, '2023-05-03', 149, 250, null, false);
INSERT INTO public.model (model_id, api_id, sku, brand, name, colorway, gender, release_year, retail_date, retail_price, estimated_market_value, image_url, deleted) VALUES ('b21befbf-e651-411a-995a-484827b6eb23', null, '7356', 'Adidas', 'Relief Training', 'Green', 'Women', 2023, '2023-02-01', 179, 225, null, false);
INSERT INTO public."user" (user_id, email, username, name, surname, address, creation_date, registration_ip, active, state) VALUES ('eb91d804-ef80-11ed-a05b-0242ac120003', 'marta@gmail.com', 'smarta', 'Marta', 'Rose', 'White Cat Street, 6', '2022-05-01 00:17:41.433000 +00:00', null, true, 'normal');
INSERT INTO public."user" (user_id, email, username, name, surname, address, creation_date, registration_ip, active, state) VALUES ('319830ea-b9f7-476d-a967-8537942abc77', 'john@gmail.com', 'johnny', 'John', 'Parker', 'Apple Street,12', '2023-02-16 00:19:19.182000 +00:00', null, true, 'normal');
INSERT INTO public."user" (user_id, email, username, name, surname, address, creation_date, registration_ip, active, state) VALUES ('5a8b2b9c-8d16-4290-8d65-17811135f4b4', 'pedro@gmail.com', 'pedropascal', 'Pedro', 'Pascal', 'Last Street, 2', '2023-04-05 00:20:13.254000 +00:00', null, true, 'normal');
INSERT INTO public.product (product_id, model_id, user_id, price, size, description, condition, are_sent, time, booked_user_id, sold, deleted) VALUES ('3ff1d01a-ef82-11ed-a05b-0242ac120003', 'b21befbf-e651-411a-995a-484827b6eb23', 'eb91d804-ef80-11ed-a05b-0242ac120003', 200, 38, 'Looking for someone that will take care of these awesome sneakers! These were bought recently.', 'Nuevo', false, '2023-03-11 00:31:57.000000', null, false, false);
INSERT INTO public.product (product_id, model_id, user_id, price, size, description, condition, are_sent, time, booked_user_id, sold, deleted) VALUES ('12f1d01a-ef82-11ed-a05b-0242ac120003', 'a3223f2d-362c-43e9-a581-d725ee39e632', '319830ea-b9f7-476d-a967-8537942abc77', 150, 42, 'Hey there! Got these sneakers yesterday, if interested send me a message!', 'Nuevo con etiquetas', false, '2023-02-17 00:37:56.000000', null, false, false);
INSERT INTO public.product (product_id, model_id, user_id, price, size, description, condition, are_sent, time, booked_user_id, sold, deleted) VALUES ('421befbf-e651-411a-995a-484827b6eb23', 'b21befbf-e651-411a-995a-484827b6eb23', '5a8b2b9c-8d16-4290-8d65-17811135f4b4', 230, 43, 'I joined the community this week and this is my first pair of sneakers on sale :)', 'Nuevo', true, '2022-09-11 00:39:35.000000', null, false, false);



