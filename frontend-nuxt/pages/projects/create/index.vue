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
            v-for="item in projectsDummy"
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

    <CreateProjectForm v-model="createFormVisible" />
  </div>
</template>

<script setup>
import CreateProjectForm from '~/components/project/form/CreateProjectForm.vue'

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

const { data: projects } = await useFetch('http://localhost:3100/projects')

const projectsDummy = [
  {
    id: 1,
    imageUrl:
      'http://localhost:9001/api/v1/download-shared-object/aHR0cDovLzEyNy4wLjAuMTo5MDAwL215Y29uL3NtYWxsL2dpbnRhbWEuanBlZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPTNEWkVSRDk3Sk00NEtPMVRaUlFYJTJGMjAyNTA2MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjE1VDA3NDQ1MFomWC1BbXotRXhwaXJlcz00MzIwMCZYLUFtei1TZWN1cml0eS1Ub2tlbj1leUpoYkdjaU9pSklVelV4TWlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaFkyTmxjM05MWlhraU9pSXpSRnBGVWtRNU4wcE5ORFJMVHpGVVdsSlJXQ0lzSW1WNGNDSTZNVGMxTURBeE5qQTBNaXdpY0dGeVpXNTBJam9pWVdSdGFXNGlmUS5SS0dSMGNmWV9DM0pGYzh1MEkwZ0phOXl0eWVZN1ZhbGRXWmlGOEw4N3k0cERscnVwWVZOQnVDNHlOR1JsU1FvamFIaE1KVGRyVFR2Q2M2Yy0yMkFLUSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmdmVyc2lvbklkPW51bGwmWC1BbXotU2lnbmF0dXJlPWZiNGJlOWY0YTRkZjZjNDI5MjcwMjMxYzY3Mzc5NjkxMGE1MDEyNmQyNzYxYTk0NDQ5MzQyZmUzMDUzMThhZDI',
    name: 'GlassHaven',
    description:
      'GlassHaven is a contemporary masterpiece designed to dissolve the barrier between interior and exterior living. Constructed primarily from reinforced tempered glass, steel beams, and sustainable concrete, the home appears to float amid a natural lakeside setting. The entire structure is bathed in natural daylight.',
    owner: 'Mr. Aran Vicheth',
    price: '$450,000',
  },
  {
    id: 2,
    imageUrl: 'http://localhost:9000/mycon/posts/small/GabeNewell.jpg',
    name: 'The Zenit House',
    description:
      'Rising above the city skyline, The Zenith House is a modern high-rise villa that redefines luxury. This 4-story steel-and-glass smart home boasts expansive views of the skyline, automated living systems, and a rooftop infinity pool. Every room is a fusion of technology.',
    owner: 'Mr. and Mrs. Dara & Sotheary',
    price: '$500,000+',
  },
  {
    id: 3,
    imageUrl: 'https://i.pinimg.com/736x/0f/87/9c/0f879c4affb07d537f0ce85bfee3ad0d.jpg',
    name: 'Villa Nova',
    description:
      'Villa Nova is a peaceful, modern villa designed to embody both personal reflection and creative energy. Built on a modest plot near the forest edge, the villa uses a mix of concrete, white stucco, and warm teak wood.',
    owner: ' Ms. Chenda Rainsy',
    price: '$370,000',
  },
  {
    id: 4,
    imageUrl: 'https://i.pinimg.com/736x/1f/41/40/1f4140d8a2b7690aa7b00b2eab36a0d4.jpg',
    name: 'Solace Heights',
    description:
      'Set high on a verdant slope overlooking the rice fields and distant hills, Solace Heights is a modern sanctuary for thought and rest. The house blends natural stone, local hardwood, and dark steel to create a dramatic but calming presence.',
    owner: 'Dr. Narith Kong',
    price: '$300,000',
  },
  {
    id: 5,
    imageUrl: 'https://i.pinimg.com/736x/e1/b9/c8/e1b9c89c746cfdbcb0284a083d76d83f.jpg',
    name: 'SlateStone House',
    description:
      'Surrounded by a natural forest preserve, SlateStone House is a low-slung architectural marvel that quietly blends into its environment. With thick slate walls, blackened steel detailing, and raw wood interiors, the house is a reflection of stillness and introspection.',
    owner: 'Mr. Rithy Pean',
    price: '$420,000',
  },
  {
    id: 6,
    imageUrl: 'https://i.pinimg.com/736x/9f/df/5d/9fdf5da95b37cc22d7a8ec2fb543e061.jpg',
    name: 'Evole Living',
    description:
      'Evolve Living is a smart, sustainable home built for the future. Everything in the house — from temperature and lighting to gardening and cooking — is optimized through a central AI.',
    owner: 'The Vichea Family ',
    price: '$450,000',
  },
]
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  margin: 10px 0 20px 0;
}
.creative-button {
  font-size: 16px;
  font-weight: 500;
  color: white;
  border-radius: 6px;
  width: 50%;
  max-width: 700px;
  background-color: #007bff;
  transition: background-color 0.2s ease;
  cursor: pointer;
}
::v-deep(.p-inputtext):focus,
::v-deep(.p-inputtext):hover {
  border-color: #007bff;
}
</style>
