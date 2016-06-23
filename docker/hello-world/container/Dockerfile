
############################################################
# hello-world
# Base: https://github.com/phusion/baseimage-docker
# Author: Graham Robertson
############################################################


########################################
# BASE SYSTEM:
FROM phusion/baseimage:0.9.18
RUN apt-get update

ADD ./build_files /tmp/build_files

# our application's code will be mapped here:
RUN mkdir -p /usr/local/hello-world
WORKDIR /usr/local/hello-world
ENTRYPOINT /usr/local/hello-world/bin/entrypoint
########################################


########################################
# ADD YOUR JUNK HERE:

#
########################################


########################################
# EXTRAS:
RUN apt-get -y install toilet
RUN apt-get -y install lolcat

RUN ln -s /usr/games/lolcat /usr/bin/lolcat

########################################

########################################
# CLEAN-UP (UNCOMMENT FOR PRODUCTION):
#RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

########################################
