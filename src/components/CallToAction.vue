<template>
  <section class="bg-white py-20">
    <div class="shell">
      <div class="relative overflow-hidden rounded-panel bg-flare p-10 sm:p-16">
        <div class="relative z-10 max-w-2xl">
          <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            One parcel or one thousand
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-ink/85">
            Check a price in under a minute. You will not be asked to make an account
            until the moment you actually need one.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <RouterLink to="/send" class="btn-dark">Check a price</RouterLink>
            <RouterLink to="/network" class="btn-outline-dark">Find a drop-off point</RouterLink>
          </div>
        </div>

        <!-- Decorative stack of boxes, purely ornamental. -->
        <svg
          class="pointer-events-none absolute -bottom-10 -right-6 hidden h-72 w-72 text-ink/10 lg:block"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M20 46 48 32l28 14v30L48 90 20 76V46Z" />
          <path d="M20 46l28 14 28-14M48 60v30" />
          <path d="M62 28 82 18l20 10v22L82 60 62 50V28Z" />
          <path d="M62 28l20 10 20-10M82 38v22" />
        </svg>
      </div>
    </div>
  </section>
</template>
