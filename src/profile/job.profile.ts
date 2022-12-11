import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { createMap, forMember, ignore, mapFrom, Mapper, MappingProfile } from "@automapper/core";
import { Injectable } from "@nestjs/common";
import { Job } from "../jobs/entities/job.entity";
import { UpdateJobDto } from "../jobs/dto/update-job.dto";
import { GetJobDto } from "../jobs/dto/get-job.dto";
import { CreateJobDto } from "../jobs/dto/create-job.dto";

@Injectable()
export class JobProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Job, GetJobDto);
      createMap(mapper, CreateJobDto, Job, forMember((dest) => dest.id, ignore()));
      createMap(mapper, UpdateJobDto, Job);
    };
  }
}
