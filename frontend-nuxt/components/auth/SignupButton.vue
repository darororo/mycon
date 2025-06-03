<template>
  <div>
    <Button
      style="
        background: #222831;
        width: 500px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 14px;
      "
      :dt="{
        padding: {
          x: '20px',
          y: '10px',
        },
        primary: {
          background: 'none',
          border: {
            color: 'none',
          },
          color: 'white',
          hover: {
            color: 'white',
            background: 'red',
            border: {
              color: 'none',
            },
          },
          active: {
            color: 'white',
            background: 'red',
            border: {
              color: 'none',
            },
          },
        },
      }"
      label="Sign Up"
    />
  </div>
</template>
