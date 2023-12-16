<template>
    <form class="contact-form" @submit.prevent="submit">
        <input class="text-input" placeholder="Name" type="text" v-model="formData.name" required>
    
        <input class="text-input" placeholder="Enter email" type="email" v-model="formData.email" required>

        <textarea placeholder="Your Message" type="text" v-model="formData.message" required />
        
        <input class="submit-button" value="SUBMIT" type="submit" ref="submitButton">
        <img src="@/assets//icons/spinner.svg" alt="loading..." rel="preload" class="loading-spinner display--none" ref="loadingSpinner" />
        <span class="notification notification--success display--none" ref="notificationSuccess">Email sent successfully</span>
        <span class="notification notification--failure display--none" ref="notificationFailure">Sorry, the email could not be sent.<br/>Please attempt to send it again later.</span>
    </form>
</template>


<script setup lang="ts">
    import { ref } from 'vue';
    import { useAppStore } from '@/stores/appStore';

    const submitButton = ref<HTMLElement | null>(null);
    const loadingSpinner = ref<HTMLElement | null>(null);

    const notificationSuccess = ref<HTMLElement | null>(null);
    const notificationFailure = ref<HTMLElement | null>(null);

    const store = useAppStore();

    const formData = ref({
        name: '',
        email: '',
        message: ''
    });

    const submit = async () => {
        console.log('resolving form action', formData.value);

        submitButton.value?.setAttribute("value", "");
        loadingSpinner.value?.classList.remove("display--none");

        const success = await store.sendEmail(formData.value.name, formData.value.email, formData.value.message);

        loadingSpinner.value?.classList.add("display--none");
        submitButton.value?.setAttribute("value", "SUBMIT");

        if (success) {
            notificationSuccess.value?.classList.remove("display--none");
            setTimeout(() => {
                notificationSuccess?.value?.classList.add("display--none");
            }, 4000);
        } else {
            notificationFailure.value?.classList.remove("display--none");
            setTimeout(() => {
                notificationFailure?.value?.classList.add("display--none");
            }, 4000);
        }

        console.log('form result', success)
    }

</script>


<style scoped>

    .contact-form {
        max-width: 57rem;
        margin: auto;
        padding: 0rem 1rem 5rem 1rem;
        position: relative;
    }

    textarea:focus, .text-input:focus {
        outline: none;
    }

    .text-input, textarea {
        display: block;
        width: 100%;
        background-color: var(--grey-1);
        border: none;
        margin-bottom: 1rem;
        box-sizing: border-box;
        padding: 1rem 1.5rem;
        color: var(--text);
        font-size: 1.8rem;
    }

    textarea {
        height: 15rem;
    }

    .submit-button {
        display: block;
        padding: 1rem 3rem;
        min-width: 14.2rem;
        color: var(--text);
        background-color: transparent;
        cursor: pointer;
        border: 0.2rem solid;
        font-size: 2.2rem;
        position: absolute;
        right: 1rem;
        transition: all 0.5s;
    }

    .submit-button:hover {
        background-color: var(--accent-1);
        color: var(--black);
        border-color: var(--accent-1);
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading-spinner {
        width: 4.5rem;
        height: 4.5em;
        position: absolute;
        right: 6rem;
        bottom: -1rem;
        animation: rotate 1.5s linear infinite;
    }   

    @keyframes float_up_and_disappear {
        0% {
            transform: translate(0, 3rem);
            opacity: 0.1;
        }
        10% {
            transform: translate(0, 0);
            opacity: 1;
        }
        80% {
            transform: translate(0, 0);
            opacity: 1;
        }
        100% {
            transform: translate(0, 0);
            opacity: 0;
        }
    }

    .notification {
        position: absolute;
        animation-name: float_up_and_disappear;
        animation-duration: 4s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
    }

    .notification--success {
        color: var(--success);
        bottom: 1.6rem;
    }

    .notification--failure {
        color: var(--failure);
        bottom: 0.2rem;
    }

</style>
  
  