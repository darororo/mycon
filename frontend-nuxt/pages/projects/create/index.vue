<template>
  <div>
    <div
      style="
        display: flex;
        justify-content: center;
        background-color: white;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 20px;
        margin-bottom: 20px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      "
    >
      <img
        style="width: 900px; height: auto"
        src="https://t4.ftcdn.net/jpg/01/20/57/23/240_F_120572350_xIXQ01UJpeZmQwDpAN1zpdP0uR5jjaGW.jpg"
        alt="banner"
      />
    </div>
    <div
      style="width: 100rem"
      class="max-w-[1500px]"
    >
      <div
        style="display: flex; flex-direction: row; justify-content: space-between; align-items: end"
      >
        <h2
          style="
            font-weight: 600;
            font-size: 22px;
            color: black;
            font-family: 'Montserrat', sans-serif;
          "
        >
          Create Project
        </h2>
        <div style="flex-direction: row; gap: 10px; display: flex">
          <Select
            placeholder="Filter Project"
            :dt="select"
            :pt="{
              root: {
                style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
              },
            }"
          />
          <Button
            :dt="button"
            :pt="{
              root: {
                style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
              },
            }"
            label="Create Project"
            @click="createFormVisible = true"
          >
            <template #icon>
              <Icon
                style="font-size: 20px; background-color: white"
                name="ic:round-plus"
              />
            </template>
          </Button>
        </div>
      </div>
      <hr style="margin: 12px 0; border-color: #ccc" />
    </div>
    <div class="flex flex-row w-full justify-between">
      <ScrollPanel style="width: 62rem; height: 50rem; padding: 12px 0; border-radius: 8px">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 14px">
          <ProjectCard
            v-for="item in projects"
            :key="item.id"
            :item="item"
          />
        </div>
      </ScrollPanel>
      <ScrollPanel style="width: 20rem; height: 50rem">
        <div
          class="mb-4"
          v-for="i in 20"
          :key="i"
        >
          <ProjectUpcomingProject />
        </div>
      </ScrollPanel>
    </div>

    <Dialog
      v-model:visible="createFormVisible"
      modal
      header="Create Project"
      :style="{ width: '800px', height: '600px' }"
      :pt="{
        content: {
          style: `
                    padding :0;
                `,
        },
      }"
      :dt="{
        background: 'white',
        color: 'black',
        header: {
          padding: '30px',
        },
      }"
    >
      <div>
        <ProjectFormCreateProjectForm />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
const createFormVisible = ref(false)

const select = {
  background: 'white',
  border: {
    color: '#ccc',
    radius: '12px',
  },
  hover: {
    border: {
      color: '#ccc',
    },
  },
  focus: {
    border: {
      color: '#ccc',
    },
  },
  padding: {
    x: '18px',
    y: '10px',
  },
}
const button = {
  primary: {
    background: '#222831',
    color: 'white',
    border: {
      color: 'none',
    },
    hover: {
      background: '#222831',
      color: 'white',
      border: {
        color: 'none',
      },
    },
    active: {
      background: '#222831',
      color: 'white',
      border: {
        color: 'none',
      },
    },
  },
  border: {
    radius: '12px',
  },
  padding: {
    x: '20px',
    y: '10px',
  },
}
const projects = [
  {
    id: 1,
    imageUrl: 'https://i.pinimg.com/736x/51/7e/36/517e36687e36838ee1b03145d8f8a28c.jpg',
    topic: 'GlassHaven',
    content:
      'GlassHaven is a contemporary masterpiece designed to dissolve the barrier between interior and exterior living. Constructed primarily from reinforced tempered glass, steel beams, and sustainable concrete, the home appears to float amid a natural lakeside setting. The entire structure is bathed in natural daylight.',
    username: 'Mr. Aran Vicheth',
    price: '$450,000',
  },
  {
    id: 2,
    imageUrl: 'https://i.pinimg.com/736x/69/5e/f9/695ef9fbc4d3a02f57c2507684c3025f.jpg',
    topic: 'The Zenit House',
    content:
      'Rising above the city skyline, The Zenith House is a modern high-rise villa that redefines luxury. This 4-story steel-and-glass smart home boasts expansive views of the skyline, automated living systems, and a rooftop infinity pool. Every room is a fusion of technology.',
    username: 'Mr. and Mrs. Dara & Sotheary',
    price: '$500,000+',
  },
  {
    id: 3,
    imageUrl: 'https://i.pinimg.com/736x/0f/87/9c/0f879c4affb07d537f0ce85bfee3ad0d.jpg',
    topic: 'Villa Nova',
    content:
      'Villa Nova is a peaceful, modern villa designed to embody both personal reflection and creative energy. Built on a modest plot near the forest edge, the villa uses a mix of concrete, white stucco, and warm teak wood.',
    username: ' Ms. Chenda Rainsy',
    price: '$370,000',
  },
  {
    id: 4,
    imageUrl: 'https://i.pinimg.com/736x/1f/41/40/1f4140d8a2b7690aa7b00b2eab36a0d4.jpg',
    topic: 'Solace Heights',
    content:
      'Set high on a verdant slope overlooking the rice fields and distant hills, Solace Heights is a modern sanctuary for thought and rest. The house blends natural stone, local hardwood, and dark steel to create a dramatic but calming presence.',
    username: 'Dr. Narith Kong',
    price: '$300,000',
  },
  {
    id: 5,
    imageUrl: 'https://i.pinimg.com/736x/e1/b9/c8/e1b9c89c746cfdbcb0284a083d76d83f.jpg',
    topic: 'SlateStone House',
    content:
      'Surrounded by a natural forest preserve, SlateStone House is a low-slung architectural marvel that quietly blends into its environment. With thick slate walls, blackened steel detailing, and raw wood interiors, the house is a reflection of stillness and introspection.',
    username: 'Mr. Rithy Pean',
    price: '$420,000',
  },
  {
    id: 6,
    imageUrl: 'https://i.pinimg.com/736x/9f/df/5d/9fdf5da95b37cc22d7a8ec2fb543e061.jpg',
    topic: 'Evole Living',
    content:
      'Evolve Living is a smart, sustainable home built for the future. Everything in the house — from temperature and lighting to gardening and cooking — is optimized through a central AI.',
    username: 'The Vichea Family ',
    price: '$450,000',
  },
]
</script>
