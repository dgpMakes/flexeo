CREATE TABLE "user"(
  user_id uuid PRIMARY KEY,
  email varchar,
  username varchar,
  name varchar,
  surname varchar,
  address varchar,
  creation_date timestamp with time zone,
  registration_ip varchar,
  active bool
);

CREATE TABLE model(
    model_id uuid PRIMARY KEY ,
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
  product_id uuid PRIMARY KEY,
  model_id uuid,
  user_id uuid,
  price smallint, /*Values checked at the front end*/
  size smallint,
  description varchar,
  condition varchar, /*Values checked at the front end*/
  are_sent bool,
  time timestamp,
  booked_user_id uuid,
  sold bool,
  deleted bool,
  CONSTRAINT fk_product_user_id__user_user_id FOREIGN KEY (user_id) REFERENCES "user"(user_id),
  CONSTRAINT fk_product_booked_user_id__user_user_id FOREIGN KEY (booked_user_id) REFERENCES "user"(user_id),
  CONSTRAINT fk_product_model_id__user_model_id FOREIGN KEY (model_id) REFERENCES model(model_id)
);
