<template>
  <div class="bg-mist">
    <div class="shell max-w-2xl py-24 text-center">
      <p class="text-6xl font-extrabold tracking-tight text-flare">404</p>
      <h1 class="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        That page has gone astray
      </h1>
      <p class="mt-5 text-lg leading-relaxed text-slate">
        The address you followed does not match anything on this site. If you were
        chasing a parcel, the tracking page is the quickest way back on course.
      </p>

      <div class="mt-9 flex flex-wrap justify-center gap-3">
        <RouterLink to="/track" class="btn-primary">Track a parcel</RouterLink>
        <RouterLink to="/" class="btn-outline-dark">Back to the home page</RouterLink>
      </div>
    </div>
  </div>
</template>
