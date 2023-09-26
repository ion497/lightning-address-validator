<script>
  import { T, useFrame } from '@threlte/core'
  import { interactivity } from '@threlte/extras'
  import { spring } from 'svelte/motion'
  import { TextureLoader } from 'three'
  import { useLoader } from '@threlte/core'
  
  interactivity()
  const scale = spring(1)
  let rotation = 0
  useFrame((state, delta) => {
    rotation += delta
  })
</script>
<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>
<T.DirectionalLight position={[0, 10, 10]} castShadow />
<T.Mesh
  rotation.y={rotation}
  position.y={1}
  scale={$scale}
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => scale.set(1)}
>
  <T.BoxGeometry args={[2, 4, 0]} />
  <T.MeshStandardMaterial color="hotpink" />
</T.Mesh>
