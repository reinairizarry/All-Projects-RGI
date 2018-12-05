create database ReinasPuppyPalace;

create table branch(
  branchNo int primary key auto_increment,
  bStreet varchar(25) not null,
  bCity varchar(10) not null,
  bZip varchar(5) not null.
  bPhoneNo varchar(10) not null
);

create table diet(
  dogNo int primary key auto_increment,
  foodBrand varchar(10) not null,
  foodType varchar(5) not null,
  volume varchar(5) not null,
  frequency varchar(3)not null
);

create table owner(
  ownerNo varchar(5) primary key auto_increment,
  fName varchar(30) not null,
  lName varchar(30) not null,
  oPhoneNumber varchar(10) not null,
  lStreet varchar(25) not null,
  lCity varchar(10) not null,
  lZip varchar(5) not null,
  branchNo int,
  constraint owner_fk_branch foreign key(branchNo) references branch(branchNo)
);

create table dog(
  dogNo in primary key auto_increment,
  dogName varchar(10) not null,
  dogColor varchar(5) not null,
  dogBreed varchar(10) not null,
  ownerNo varchar(25),
  constraint dog_fk_owner foreign key(ownerNo) references owner(ownerNo),
  constraint dog_fk_diet foreign key(dietNo) references diet(dietNo),
);
