<template>
  <ScrollPanel style="padding: 10px 0 10px 20px; width: auto; height: 400px">
    <div style="gap: 14px; display: flex; flex-direction: column">
      <Card
        v-for="card in users"
        :key="card.id"
        :pt="{
          root: {
            style: `
              width: 18rem;
              border-radius: 1rem;
              background: #CF0F47;
              transition: box-shadow 0.3s ease, transform 0.3s ease;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            `,
            class: 'card-hover',
          },
        }"
        :dt="cardDt"
      >
        <template #content>
          <div class="card-content">
            <div class="user-info">
              <img
                class="avatar"
                :src="card.urlImg"
                alt="User Avatar"
              />
              <label class="username">{{ card.username }}</label>
            </div>
            <Icon
              class="close-icon"
              name="material-symbols:close"
            />
          </div>
        </template>
      </Card>
    </div>
  </ScrollPanel>
</template>

<script setup>
const cardDt = {
  body: {
    padding: '8px 10px',
  },
}

defineProps({
  users: {
    type: Array,
    default: () => [
      {
        id: 1,
        username: 'Anna Yamada',
        urlImg: 'https://i.pinimg.com/736x/1d/71/4d/1d714db6e010802da8bd751835ca9819.jpg',
      },
      {
        id: 2,
        username: 'Sawako Kuronuma',
        urlImg: 'https://i.pinimg.com/736x/a9/51/46/a95146aaf10b63f9a2479ba31af8af37.jpg',
      },
      {
        id: 3,
        username: 'Anna Yamada',
        urlImg: 'https://i.pinimg.com/736x/1d/71/4d/1d714db6e010802da8bd751835ca9819.jpg',
      },
      {
        id: 4,
        username: 'Rayne Anna',
        urlImg: 'https://i.pinimg.com/736x/f2/dd/80/f2dd80c5119199eed33b852b6aafd412.jpg',
      },
      {
        id: 5,
        username: 'Tomaya Okazaki',
        urlImg: 'https://i.pinimg.com/736x/43/ed/b9/43edb95b241db03065d23e1d3679a59c.jpg',
      },
      {
        id: 6,
        username: 'Akito Yamada',
        urlImg: 'https://i.pinimg.com/736x/85/db/a4/85dba45cb557a4921988af222ff0747c.jpg',
      },
      {
        id: 7,
        username: 'kaoru Kamiya',
        urlImg: 'https://i.pinimg.com/736x/7d/fb/9f/7dfb9f5478faf24601895a624b29572d.jpg',
      },
      {
        id: 8,
        username: 'Enata Kaguya',
        urlImg: 'https://i.pinimg.com/736x/e6/59/bb/e659bbc1dc681e9b36016590249e9ac7.jpg',
      },
      {
        id: 9,
        username: 'Zero Two',
        urlImg: 'https://i.pinimg.com/736x/5e/30/15/5e30153b76d17935e1a8729b1cf89b1a.jpg',
      },
      {
        id: 10,
        username: 'Taki',
        urlImg: 'https://i.pinimg.com/736x/09/19/87/091987c064c58d183580323c2b708e71.jpg',
      },
    ],
  },
})
</script>

<style scoped>
.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}

.username {
  font-weight: 600;
  font-size: 12px;
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.close-icon {
  cursor: pointer;
  font-size: 18px;
  color: white;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.close-icon:hover {
  transform: scale(1.1);
}

.card-hover:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}
</style>
