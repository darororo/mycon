<template>
  <div class="w-1/4">
    <h2 class="text-xl font-semibold mb-4">Account Settings</h2>
  </div>
  <div class="account-settings-container">
    <div class="sidebar">
      <PanelMenu :model="sidebarItems" />
    </div>
    <div class="main-content">
      <Card>

        <template #content>
          <div class="profile-header">
            <Avatar :image="profileImageSource" class="p-mr-2" size="xlarge" shape="circle" />
            <div class="avatar-actions">
              <FileUpload
                mode="basic"
                label="Upload New"
                chooseLabel="Upload New"
                accept="image/*"
                :maxFileSize="1000000"
                @select="onImageSelect"
                :customUpload="true"
                :showUploadButton="false"
                :showCancelButton="false"
                class="custom-upload-btn"
              />
              <Buttons label="Delete avatar" class="p-ml-2 custom-delete-btn" @click="deleteAvatar" />
            </div>
          </div>


          <form @submit.prevent="saveChanges" class="p-fluid">
              <div class="p-formgrid ">
                <div class="p-field ">
                  <label for="firstName">First Name*</label>
                  <InputText id="firstName" v-model="profile.firstName" type="text" class="p-inputtext-sm" placeholder="first name" required />

                </div>
                <div class="p-field ">
                  <label for="lastName">Last Name*</label>
                  <InputText id="lastName" v-model="profile.lastName" type="text" class="p-inputtext-sm" placeholder="last name" required />
                </div>
              </div>

              <div class="p-formgrid ">
                <div class="p-field ">
                  <label for="email">Email</label>
                  <InputText id="email" v-model="profile.email" type="email" class="p-inputtext-sm" placeholder="example@gmail.com" />
                </div>
                <div class="p-field ">
                <label for="mobileNumber">Mobile Number*</label>
                <InputMask id="mobileNumber" v-model="profile.mobileNumber" mask="9999999999" placeholder="+855"  />
              </div>
              </div>

              <div class="p-formgrid ">
                <div class="p-field">
                  <label>Gender</label>
                  <div class="p-d-flex p-ai-center p-gap-3">
                    <div class="p-field-radiobutton">
                      <RadioButton id="genderMale" name="gender" value="male" v-model="profile.gender" />
                      <label for="genderMale" class="p-ml-2">Male</label>
                    </div>
                    <div class="p-field-radiobutton">
                      <RadioButton id="genderFemale" name="gender" value="female" v-model="profile.gender" />
                      <label for="genderFemale" class="p-ml-2">Female</label>
                    </div>
                  </div>
                </div>
                <div class="p-field ">
                  <label for="idNumber">ID</label>
                  <InputText id="idNumber" v-model="profile.idNumber" type="text" class="p-inputtext-sm" placeholder="123 123 123" />
                </div>
              </div>

              <div class="p-formgrid ">
                <div class="p-field ">
                  <label for="taxIdentificationNumber">Tax Identification Number</label>
                  <InputText id="taxIdentificationNumber" v-model="profile.taxIdentificationNumber" type="text" class="p-inputtext-sm" placeholder="example@gmail.com" />
                </div>
                <div class="p-field ">
                  <label for="role">Role</label>
                  <InputText id="role" v-model="profile.role" type="text" class="p-inputtext-sm" placeholder="Developer" />
                </div>
              </div>

              <div class="p-field ">
                <label for="residentialAddress">Residential Address</label>
                <Textareass id="residentialAddress" v-model="profile.residentialAddress" rows="3" class="p-inputtext-sm" autoResize placeholder="Address..." />
              </div>

              <div class="p-d-flex p-jc-center p-mt-4 ">
                <Buttons type="submit" label="Save Change" class="p-button-lg custom-save-button" />
              </div>
            </form>


        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import PanelMenu from 'primevue/panelmenu';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import FileUpload from 'primevue/fileupload';
import Buttons from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import RadioButton from 'primevue/radiobutton';
import Textareass from 'primevue/textarea';


export default {
  components: {
    PanelMenu,
    Card,
    Avatar,
    FileUpload, 
    Buttons,
    InputText,
    InputMask,
    RadioButton,
    Textareass
  },
  setup() {
    const sidebarItems = ref([
      {
        label: 'Profile Settings',
        icon: 'pi pi-user',
        command: () => { /* navigate to profile settings */ }
      },
      {
        label: 'Password',
        icon: 'pi pi-lock',
        command: () => { /* navigate to password settings */ }
      },
      {
        label: 'Notifications',
        icon: 'pi pi-bell',
        command: () => { /* navigate to notifications settings */ }
      },
      {
        label: 'Verification',
        icon: 'pi pi-check-circle',
        command: () => { /* navigate to verification settings */ }
      }
    ]);

    const profile = ref({
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      gender: '',
      idNumber: '',
      taxIdentificationNumber: '',
      role: '',
      residentialAddress: ''
    });

    const profileImageSource = ref('https://picsum.photos/id/237/200/300');

    const onImageSelect = (event) => {
      const file = event.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          profileImageSource.value = e.target.result;
        };
        reader.readAsDataURL(file);
        console.log('Selected image:', file);
      }
    };

    const deleteAvatar = () => {
      profileImageSource.value = null; 
      console.log('Avatar deleted');
    };

    const saveChanges = () => {
      console.log('Form submitted:', profile.value);
      alert('Changes saved!');
    };

    return {
      sidebarItems,
      profile,
      profileImageSource,
      onImageSelect,
      deleteAvatar,
      saveChanges
    };
  }
};
</script>

<style scoped>

.account-settings-container {
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  background-color: #ffffff;
  padding: 20px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px; 
}


.main-content {
  flex-grow: 1;
  padding: 20px;
  background-color: #ffffff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}


.p-card {
    box-shadow: none !important;
}
 
.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.avatar-actions {
  display: flex;
  align-items: center;
  margin-left: 20px;
}


.custom-upload-btn .p-button {
  background-color: #1921B8 !important;
  border-color: #1921B8 !important;
  color: white !important;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
}

.custom-upload-btn .p-button:hover {
  background-color: #3B3B7A !important;
  border-color: #3B3B7A !important;
}


.custom-delete-btn {
  background-color: #F4F4F4 !important;
  border-color: #F4F4F4 !important;
  color: black !important;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
}

.custom-delete-btn:hover {
  background-color: #1921B8 !important;
  border-color: #1921B8 !important;
}

.p-formgrid.p-grid {
  margin-top: 20px;
  margin-left: -1rem;
  margin-right: -1rem;
}

.p-field {
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, auto);

}

.p-field label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

.p-inputtext-sm {
  height: 2.5rem;
  padding: 0.5rem 0.75rem;
}


.p-formgroup-inline {
  display: flex;
  gap: 1rem;
}

.custom-save-button {
  background-color: #1921B8 !important;
  border-color: #1921B8 !important;
  color: white !important;
  font-weight: 600;
  padding: 0.75rem 2rem;
}

.custom-save-button:hover {
  background-color: #1921B8 !important;
  border-color: #1921B8 !important;
}

.p-panelmenu .p-panelmenu-header.active-sidebar-item > a {
  background-color: #1921B8 !important;
  color: #ffffff !important;
  border-radius: 5px;
  padding: 10px 15px;
}
.p-panelmenu .p-menuitem-link {
  padding: 10px 15px;
  border-radius: 5px;
}
.p-panelmenu .p-menuitem-link:not(.active-sidebar-item):hover {
    background-color: #f0f0f0;
}
</style>