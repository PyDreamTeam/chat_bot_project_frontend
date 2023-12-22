import React from "react";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Text from "@/src/components/shared/text/Text";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Link from "next/link";
import css from "./publicPlatform.module.css";
import Title from "@/src/components/shared/text/Title";
// import { InputAddPlatform } from "@/src/components/entities/platforms/addPlatform/InputAddPlatform";
import { InputAddSolution } from "@/src/components/entities/solutions/addSolution/InputAddSolution";
// import { TextAreaAddPlatform } from "@/src/components/entities/platforms/addPlatform/TextAreaAddPlatform";
import { TextAreaAddSolution } from "@/src/components/entities/solutions/addSolution/TextAreaAddPSolution";
import { useEffect, useState } from "react";
// import { MultipleInput } from "@/src/components/entities/platforms/addPlatform/MultipleInput";
import { MultipleInput } from "@/src/components/entities/solutions/addSolution/MultipleInput";
// import { useChangePlatformMutation, useGetPlatformQuery, useGetPlatformsFiltersQuery, usePlatformPublicMutation } from "@/src/store/services/platforms";
import {
    useChangeSolutionMutation,
    useGetSolutionQuery,
    useGetSolutionsFiltersQuery,
    useSolutionPublicMutation,
} from "@/src/store/services/solutions";
// import { GroupsFilters, PropsGroupsFilters } from "@/src/components/entities/platforms/addPlatform/filtersForAddPlatform/GroupsFiltrs/GroupsFilters";
import {
    PropsGroupsFilters,
    GroupsFilters,
} from "@/src/components/entities/solutions/addSolution/filtersForAddSolution/GroupsFiltrs/GroupsFilters";
// import { PropsPlatformCard } from "@/src/components/entities/platforms/types";
import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
// import { getFilterFromBack, getLinkToPlatform, getLinkToSolution, linkToPlatform } from "@/src/store/reducers/addPlatform/slice";
import {
    getFilterFromBack,
    getLinkToSolution,
    getLinkToPlatform,
    linkToSolution,
} from "@/src/store/reducers/addSolution/slice";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { UploadImage } from "@/src/components/entities/platforms/addPlatform/UploadImage";
import { Loader } from "@/src/components/shared/Loader/Loader";
