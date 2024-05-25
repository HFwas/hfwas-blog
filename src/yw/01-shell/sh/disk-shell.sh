#!/bin/bash
echo "n




w
" | fdisk /dev/vda
pvcreate /dev/vda3
vgextend openeuler /dev/vda3
lvextend -l +100%FREE /dev/mapper/openeuler-root
resize2fs /dev/mapper/openeuler-root