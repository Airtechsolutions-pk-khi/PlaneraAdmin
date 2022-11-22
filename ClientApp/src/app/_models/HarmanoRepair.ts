export class Service {
  serviceID: number;
  companyID: number;
  title: string;
  arabicTitle: string;
  description: string;
  arabicDescription: string;
  statusID: number;
}
export class ServiceImage {
  serviceImageID: number;
  serviceID: number;
  imageIcon: string;
  imagePath: string;
  statusID: string;
}
export class GaleryImage {
  galleryID: number;
  groupID: number;
  companyID: number;
  title: string;
  arabicTitle: string;
  imagePath: string;
  statusID: number;
}
export class GalleryGroup{
  groupID: number;
  companyID: number;
  name: string;
  arabicName: string;
  statusID: number;
}
