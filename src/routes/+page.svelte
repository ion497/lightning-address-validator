<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<div class="hero min-h-full lg:px-20 mt-10 lg:mt-20">
  <div class="hero-content flex-col lg:flex-row ">
    <div class="text-center lg:text-left ">
      <div class="grid lg:grid-cols-4 grid-cols-1 gap-4">
        <div class="col-span-1">
          <span class="text-9xl">⚡️</span>
        </div>
        <div class="lg:col-span-3 col-span-1 lg:px-0 px-20">
          <h1 class="text-5xl font-bold text-neutral-100">Validate Your <br />Lightning Address</h1>
          <p class="py-6 text-neutral-300">Run tests on your Bitcoin <a href="https://lightningaddress.com/" class="underline font-semibold text-amber-400 hover:text-amber-200">Lightning Address</a> to make sure it is configured properly and to receive helpful tips to ensure maximum compatibility with Lightning wallets.</p>
        </div>
      </div>
    </div>

    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-tl from-black to-transparent">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-neutral-100">Lightning Address</span>
          </label>
          <input type="email" placeholder="satoshi@zappedcloud.com" class="input input-bordered invalid:outline-red-500 invalid:outline-3 valid:outline-yellow-500 valid:outline-3" />
        </div>
        <div class="form-control">
						<label class="cursor-pointer label">
							<span class="label-text text-neutral-100">Validate Invoice Creation</span> 
							<input type="checkbox" class="toggle toggle-primary" checked />
						</label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary text-white">Validate</button>
        </div>
      </div>
    </div>
  </div>
</div>