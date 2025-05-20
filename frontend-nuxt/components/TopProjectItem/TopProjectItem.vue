<template>
  <ScrollPanel
    :pt="{
      root: {
        style: `
          border-radius: 20px;
          border: 1px solid #ccc;
          width: 100%;
          height: 400px`,
      },
    }"
  >
    <Card
      v-for="item in topProject"
      :key="item.id"
      :dt="card"
    >
      <template #content>
        <div style="gap: 20px; justify-content: space-between; display: flex">
          <img
            style="border-radius: 10px; width: 270px; height: auto"
            :src="item.UrlmgProject"
            alt="UrlProject"
          />
          <div
            style="
              border-radius: 10px;
              border: 1px solid #ccc;
              padding: 20px 30px 20px 30px;
              justify-content: space-between;
              flex-direction: column;
              display: flex;
            "
          >
            <div>
              <div style="justify-content: space-between; align-items: center; display: flex">
                <label
                  style="font-weight: 600; font-size: 16px; font-family: 'Montserrat', sans-serif"
                  >{{ item.topic }}</label
                >
                <div style="cursor: pointer; gap: 6px; align-items: center; display: flex">
                  <span style="color: red; font-size: 14px; font-family: 'Montserrat', sans-serif"
                    >See details</span
                  >
                  <Icon
                    style="color: red; font-size: 24px"
                    name="si:arrow-right-duotone"
                  />
                </div>
              </div>
              <p
                style="
                  padding-right: 10rem;
                  padding-bottom: 20px;
                  width: auto;
                  font-size: 14px;
                  line-height: 30px;
                  font-family: 'Montserrat', sans-serif;
                "
              >
                {{ item.content }}
              </p>
            </div>
            <div style="justify-content: space-between; align-items: center; display: flex">
              <label style="font-size: 14px; font-family: 'Montserrat', sans-serif"
                >Location: <span>{{ item.location }}</span></label
              >
              <label
                style="
                  font-size: 14px;
                  gap: 4px;
                  display: flex;
                  font-family: 'Montserrat', sans-serif;
                "
                >{{ item.username }}<span style="color: red">{{ item.role }}</span></label
              >
            </div>
          </div>
        </div>
      </template>
    </Card>
  </ScrollPanel>
</template>

<script setup>
defineProps({
  topProject: {
    type: Array,
    default: () => [
      {
        id: 1,
        topic: 'Artisan Builder',
        UrlmgProject: 'https://i.pinimg.com/736x/ac/68/8a/ac688a8dc7078aac637dc9a2f3717419.jpg',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae enim aliquid, explicabo ratione qui, fugiat doloribus minima veritatis quaerat similique deserunt maxime exercitationem dolorem impedit repellat debitis cupiditate.',
        location: 'Phnom Penh, Cambodia',
        username: 'Taiki Inomata',
        role: '(Manager)',
      },
      {
        id: 2,
        topic: 'Cityscape Builder',
        UrlmgProject: 'https://i.pinimg.com/736x/6f/02/98/6f029862a78d73e48618d80629029d78.jpg',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae enim aliquid, explicabo ratione qui, fugiat doloribus minima veritatis quaerat similique deserunt maxime exercitationem dolorem impedit repellat debitis cupiditate.',
        location: 'Tokyo, Japan',
        username: 'Kaguya Shinomiya',
        role: '(Owner)',
      },
      {
        id: 3,
        topic: 'Keystone Construction',
        UrlmgProject: 'https://i.pinimg.com/736x/4c/9c/2c/4c9c2c5c604da4d7588ed561a8a3f79e.jpg',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae enim aliquid, explicabo ratione qui, fugiat doloribus minima veritatis quaerat similique deserunt maxime exercitationem dolorem impedit repellat debitis cupiditate.',
        location: 'Bankok, Thailand',
        username: 'Sawako Kuronuma',
        role: '(Client)',
      },
    ],
  },
})
const card = {
  background: 'none',
  color: 'black',
  body: {
    padding: '20px 30px 20px 30px',
    border: 'none',
  },
  shadow: 'none',
}
</script>

<style scoped></style>
