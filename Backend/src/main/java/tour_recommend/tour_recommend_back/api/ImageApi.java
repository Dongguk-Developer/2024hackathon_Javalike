package tour_recommend.tour_recommend_back.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import tour_recommend.tour_recommend_back.dto.common.ResponseDto;
import tour_recommend.tour_recommend_back.service.ImageService;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
public class ImageApi {
    private final ImageService imageService;

    @PostMapping("/images")
    public ResponseEntity<ResponseDto<?>> uploadImages(@RequestParam("files") MultipartFile[] files) {
        try {
            String[] filePaths = imageService.save(files);

            return new ResponseEntity<>(
                    new ResponseDto<>(ResponseDto.Status.SUCCESS, "파일 저장 성공", filePaths),
                    HttpStatus.OK
            );
        } catch (IOException e) {
            return new ResponseEntity<>(
                    new ResponseDto<>(ResponseDto.Status.FAILURE, "파일 저장 실패", e.getMessage())
                    , HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
