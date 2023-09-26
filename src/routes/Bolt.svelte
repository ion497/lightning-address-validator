<script>
  import { T, useFrame } from '@threlte/core'
  import { interactivity } from '@threlte/extras'
  import { spring } from 'svelte/motion'
  import { TextureLoader } from 'three'
  import { useLoader } from '@threlte/core'
  
  const texture = useLoader(TextureLoader).load('/bolt.png')

  interactivity()
  const scale = spring(1)
  let rotation = 180
  let rotationTarget = 180
  useFrame((state, delta) => {
    if (rotation < rotationTarget && rotation + delta*2 < rotationTarget) {
      rotation += delta*2;
    }
    else if (rotation > rotationTarget && rotation - delta*2 > rotationTarget) {
      rotation -= delta*2;
    }
  })
</script>
<T.PerspectiveCamera
  makeDefault
  position={[4, 0, 4]}
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
/>
<T.DirectionalLight position={[8, 3, 5]} intensity=1.5 />
<T.Mesh
  rotation.y={rotation}
  position.y={0}
  scale={$scale}
  on:pointerenter={() => {scale.set(1.0); rotationTarget = 180.4;}}
  on:pointerleave={() => {scale.set(1); rotationTarget = 180;}}
>
  <T.BoxGeometry args={[2, 4, 0]} />
  {#if $texture}
  <T.MeshStandardMaterial map={$texture} transparent=true metalness=2.1/>
  {/if}
</T.Mesh>
