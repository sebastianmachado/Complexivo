import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";
import Swal from 'sweetalert2';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit{
  menuList: { number: string; name: string; icon: string; route: string; }[] | undefined;
  valorInterpolado: string = '';



constructor(private router: Router,private route: ActivatedRoute) {

  }


  ngOnInit() {
    const valorInterpoladoFromLocalStorage = localStorage.getItem('valorInterpolado');
    if (valorInterpoladoFromLocalStorage !== null) {
      this.valorInterpolado = valorInterpoladoFromLocalStorage;
    }

    const userRole = localStorage.getItem('userRole');
    if (userRole) {
      this.showListForUserRole(parseInt(userRole, 10));
    }



  }

  logout() {
    Swal.fire({
      title: 'Cerrar Sesión',
      text: '¿Estás seguro de que deseas cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Elimina los valores del localStorage y redirige a la página de inicio de sesión
        localStorage.removeItem('valorInterpolado');
        localStorage.removeItem('userRole');
        this.router.navigate(['/departamentologin']);
      }
    });
  }


  showListForUserRole(userRole: number) {
    // Utiliza el valor del rol para mostrar la lista correspondiente
    switch (userRole) {
      case 1:
        this.menuList = this.listpresidencia;
        break;
      case 2:
        this.menuList = this.listproyectos;
        break;
      case 3:
        this.menuList = this.listsecretaria;
        break;
      case 4:
          this.menuList = this.listbienes;
          break;
      // Agrega más casos para otros roles si es necesario
      default:
        // Si no se encuentra un rol válido, puedes mostrar un mensaje de error o redirigir a una página de error.
        break;
    }
  }

  @Input() sideNavState: boolean = false;

  listpresidencia = [




    {
      number: "4",
      name: "Administrar Usuarios",
      icon: "fa-solid fa-user-pen",
      route: "/home/administracion/usuario",
    }

  ];

  listproyectos = [

    {
      number: "1",
      name: "Inventario",
      icon: "fa-solid fa-file-pen",
      route: "/home/proyectos/inventario",
    }
  ];

  listsecretaria = [
    {
      number: "1",
      name: "Lista Solicitudes",
      icon: "fa-solid fa-list fa-lg",
      route: "/home/secretaria/solicitudes"
    },
    {
      number: "2",
      name: "Solicitudes Revisadas",
      icon: "fa-solid fa-file-pen",
      route: "/home/secretaria/solicitudesrevisadas",
    },
    {
      number: "3",
      name: "Lista Certificados",
      icon: "fa-solid fa-id-badge",
      route: "/home/secretaria/certificados",
    },
    {
      number: "4",
      name: "Bienes Solicitudes",
      icon: "fa-solid fa fa-cube fa-lg",
      route: "/home/bienes/bienes-solicitudes"
    },
    {
      number: "5",
      name: " Solicitudes Archivadas",
      icon: "fa-solid fa fa-archive fa-lg",
      route: "/home/secretaria/solicitudesarchivadas"
    },


  ];

  listbienes = [

    {
      number: "1",
      name: "Registro Bienes",
      icon: "fa-solid fa-file-pen",
      route: "/home/bienes/registro-bienes",
    },
    {
      number: "2",
      name: "Bienes Categorias",
      icon: "fa-regular fa-address-book fa-lg",
      route: "/home/bienes/bienes-categorias"
    },
    {
      number: "3",
      name: "Bienes Solicitudes",
      icon: "fa-regular fa-address-book fa-lg",
      route: "/home/bienes/bienes-solicitudes"
    },
  ];





}
