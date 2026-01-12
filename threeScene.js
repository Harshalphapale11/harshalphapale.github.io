const canvas = document.getElementById("threeCanvas");
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({canvas,alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);

const geometry = new THREE.TorusKnotGeometry(1,0.4,100,16);
const material = new THREE.MeshStandardMaterial({color:0x00f0ff,metalness:0.8,roughness:0.2});
const knot = new THREE.Mesh(geometry,material);
scene.add(knot);

const light = new THREE.PointLight(0xffffff,2);
light.position.set(5,5,5);
scene.add(light);

function animate(){
requestAnimationFrame(animate);
knot.rotation.x += 0.01;
knot.rotation.y += 0.01;
renderer.render(scene,camera);
}
animate();
