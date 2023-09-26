import {
	BoxGeometry,
	DirectionalLight,
	HemisphereLight,
	Mesh,
	MeshStandardMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer
} from 'three';

import { OBJLoader } from '$lib/threejs/OBJLoader.js';
const lightningBoltModel: string = '/src/lib/models/LightningSymbol_OBJ/LightningSymbol.obj';
console.log(lightningBoltModel);

const scene = new Scene();
const loader = new GLTFLoader();

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

const geometry = new BoxGeometry();

const material = new MeshStandardMaterial({
	color: 0xffff00,
	metalness: 0.03
});

const cube = new Mesh(geometry, material);
scene.add(cube);

loader.load(
	lightningBoltModel,
	function (gltf) {
		scene.add(gltf.scene);
	},
	undefined,
	function (error) {
		console.error(error);
	}
);

const directionalLight = new DirectionalLight(0xffffff);
directionalLight.position.set(-10, 10, -10).normalize();
scene.add(directionalLight);

const hemisphereLight = new HemisphereLight(0xffffff, 0x444444);
hemisphereLight.position.set(1, 1, 1);
scene.add(hemisphereLight);

let renderer: WebGLRenderer;

const animate = () => {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(window.innerWidth, 300);
	camera.aspect = window.innerWidth / 300;
	camera.updateProjectionMatrix();
};

export const createScene = (el: HTMLCanvasElement) => {
	renderer = new WebGLRenderer({ antialias: true, alpha: true, canvas: el });
	resize();
	animate();
};

window.addEventListener('resize', resize);
